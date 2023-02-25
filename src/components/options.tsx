export interface Option {
    label: string;
    value: string;
    color: string;
}

const options: Option[] = [
    { label: "Red", value: "red", color: "#ff0000" },
    { label: "Green", value: "green", color: "#00ff00" },
    { label: "Blue", value: "blue", color: "#0000ff" },
];

export default options;
