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

    return weatherIcons[weather] || <Cloud />;
}
