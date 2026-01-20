const API_BASE_URL = 'http://115.187.62.16:8005/VONTRestAPI/api';

export interface GenerateOTPResponse {
  version: string;
  status: number;
  message: string;
  data: {
    user_name: string;
    user_otp: string | null;
  };
}

export interface ValidateOTPResponse {
  version: string;
  status: number;
  message: string;
  data: {
    user_id: number;
    user_type_id: number;
    user_type_name: string;
    user_full_name: string | null;
    user_contact_number: string;
  };
}

export interface GenerateTokenResponse {
  version: string;
  status: number;
  message: string;
  data: {
    access_token: string;
    created_at: string;
    expires_at: string;
  };
}

export const authService = {
  // Generate OTP
  async generateOTP(mobileNumber: string): Promise<GenerateOTPResponse> {
    const response = await fetch(`${API_BASE_URL}/admin/generate_otp`, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile_number: mobileNumber,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate OTP');
    }

    return response.json();
  },

  // Validate OTP
  async validateOTP(mobileNumber: string, otp: string): Promise<ValidateOTPResponse> {
    const response = await fetch(`${API_BASE_URL}/admin/validate_otp`, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile_number: mobileNumber,
        otp: otp,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to validate OTP');
    }

    return response.json();
  },

  // Generate Token
  async generateToken(mobileNumber: string, otp: string): Promise<GenerateTokenResponse> {
    // Create Basic Auth header
    const credentials = btoa(`${mobileNumber}:${otp}`);
    
    const response = await fetch(`${API_BASE_URL}/auth/generateToken`, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Authorization': `Basic ${credentials}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to generate token');
    }

    return response.json();
  },
};