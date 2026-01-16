import { createContext, useContext, useState, ReactNode } from "react"

interface BuyerDetails {
    name: string
    aadhaar: string
    address: string
}

interface WorkflowContextType {
    vehicleRegNo: string
    setVehicleRegNo: (regNo: string) => void
    ownerEmail: string
    setOwnerEmail: (email: string) => void
    buyerDetails: BuyerDetails
    setBuyerDetails: (details: BuyerDetails) => void
    transferRequestId: string
    setTransferRequestId: (id: string) => void
    resetWorkflow: () => void
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined)

export function WorkflowProvider({ children }: { children: ReactNode }) {
    const [vehicleRegNo, setVehicleRegNo] = useState("")
    const [ownerEmail, setOwnerEmail] = useState("")
    const [buyerDetails, setBuyerDetails] = useState<BuyerDetails>({
        name: "",
        aadhaar: "",
        address: "",
    })
    const [transferRequestId, setTransferRequestId] = useState("")

    const resetWorkflow = () => {
        setVehicleRegNo("")
        setOwnerEmail("")
        setBuyerDetails({ name: "", aadhaar: "", address: "" })
        setTransferRequestId("")
    }

    return (
        <WorkflowContext.Provider
            value={{
                vehicleRegNo,
                setVehicleRegNo,
                ownerEmail,
                setOwnerEmail,
                buyerDetails,
                setBuyerDetails,
                transferRequestId,
                setTransferRequestId,
                resetWorkflow,
            }}
        >
            {children}
        </WorkflowContext.Provider>
    )
}

export function useWorkflow() {
    const context = useContext(WorkflowContext)
    if (context === undefined) {
        throw new Error("useWorkflow must be used within a WorkflowProvider")
    }
    return context
}