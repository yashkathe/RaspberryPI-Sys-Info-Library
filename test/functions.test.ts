import { getCpuTemperature, getGpuTemperature } from '../src/functions/function-calls';  // Adjust the import path according to your project structure

describe('Temperature Functions', () => {

    it('should return GPU temperature', async () => {
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

});