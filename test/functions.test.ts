import { getCpuFrequency, getCpuTemperature, getGpuTemperature } from '../src/functions/function-calls';  // Adjust the import path according to your project structure

describe('Temperature Functions', () => {

    it('should return GPU Temperature', async () => {
        const temperature = await getGpuTemperature();
        console.log(`GPU Temperature is: ${temperature}`)
        expect(typeof temperature).toBe('number');
        expect(temperature).toBeGreaterThan(0)
    });

    it('should return CPU Temperature', async () => {
        const temperature = await getCpuTemperature();
        console.log(`CPU Temperature is: ${temperature}`)
        expect(typeof temperature).toBe('number')
        expect(temperature).toBeGreaterThan(0)
    })

    it('should return CPU frequency', async() => {
        const frequency = await getCpuFrequency()
        console.log(`CPU Frequency is: ${frequency}`)
        expect(typeof frequency).toBe('number')
        expect(frequency).toBeGreaterThan(0)
    })

});