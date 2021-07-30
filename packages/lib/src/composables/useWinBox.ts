declare const WinBox: WinBox.WinBoxConstructor;

export default function useWinBox() {
    return (options: WinBox.Params) => new WinBox(options)
}