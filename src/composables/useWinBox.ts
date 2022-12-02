declare const WinBox: WinBox.WinBoxConstructor

export function useWinBox() {
  return (options: WinBox.Params) => new WinBox(options)
}
