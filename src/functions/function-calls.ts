import { executeCommand, readFile } from "./function-helpers";

export const getGpuTemperature = async (): Promise<number | string> => {
    try{

        const command = `vcgencmd measure_temp | awk -F"=" '{print $2}' | awk -F"'" '{print $1}'`
        const gpuTemp = await executeCommand(command)
        
        return +gpuTemp
    }catch(error: any){
        return error.message
    }
}

export const getCpuTemperature = async (): Promise<number | string> => {
    try{
        const file = '/sys/class/thermal/thermal_zone0/temp';
        const cpuTemp = await readFile(file)

        return parseFloat(cpuTemp) / 1000
    }catch(error: any){
        return error.message
    }
}