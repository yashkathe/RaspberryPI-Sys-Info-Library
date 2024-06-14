# Raspberry PI Sys 

This project is an npm library for extracting various metrics from a Raspberry Pi. It includes functions to read CPU and GPU temperatures, disk usage, network statistics, system uptime, load average, and voltage information.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use this library in your project, you need to install it via npm. Make sure you have Node.js and npm installed.

```bash
npm i raspberrypi-sys-info
```

## Usage

Below is an example of how to use the library to fetch and display various metrics from a Raspberry Pi.

### Example Code

```typescript
import { getCPUTemperature, getGpuTemperature } from 'rpi-metrics-lib';

async function displaySystemInfo() {
    try {
        const cpuTemp = await getCPUTemperature();
        console.log(`CPU Temperature: ${cpuTemp}°C`);

        const gpuTemp = await getGpuTemperature();
        console.log(`GPU Temperature: ${gpuTemp}°C`);

    } catch (error) {
        console.error(error.message);
    }
}

displaySystemInfo();
```

## Functions

### `getCPUTemperature()`
Returns the CPU temperature in degrees Celsius.

### `getGpuTemperature()`
Returns the GPU temperature in degrees Celsius.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. 