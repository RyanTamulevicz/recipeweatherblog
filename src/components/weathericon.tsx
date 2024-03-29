import { Sun, Cloud, CloudRain, Snowflake } from "lucide-react";

interface WeatherIconProps {    
    weather: string;
}

export function WeatherIcon({ weather }: WeatherIconProps): JSX.Element {
    const weatherIcons: { [key: string]: JSX.Element } = {
        'cloudy': <Cloud />,
        'sunny': <Sun />,
        'rainy': <CloudRain />,
        'snowy': <Snowflake />,
    };

    // Fallback to 'cloudy' as the default weather icon if the weather prop is not in weatherIcons
    return weatherIcons[weather] || <Cloud />;
}
