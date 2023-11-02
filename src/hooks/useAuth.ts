import { useAppContext } from "@/contexts/AppContext";
import {useConnect, useDisconnect, useAccount} from "wagmi";
import {InjectedConnector} from "wagmi/connectors/injected";

export function useAuth() {
    const { address, isConnected } = useAccount();
    const { setAddress, setIsConnected } = useAppContext();

    const {connect} = useConnect({
        connector: new InjectedConnector(),
    })

    const {disconnect} = useDisconnect();

    const handleConnect = async () => {
        try{
            if(isConnected) {
                await handleDisconnect
            }
            await connect()
            setAddress(address ?? "")
            setIsConnected(isConnected)

        }catch (e) {
            console.log("Connection error:", e)
        }
    };

    const handleDisconnect = async () => {
        try{
            if(isConnected) {
                await handleDisconnect
            }
            await disconnect()
            setAddress(address ?? "")
            setIsConnected(isConnected)

        }catch (e) {
            console.log("Connection error:", e)
        }

    };

    return {
        handleConnect,
        handleDisconnect,
    };
}
