type Option<T = string> = {
  value: string
  displayText: T
}

export const PREFIX_OPTIONS: Option[] = [
  { value: 'mr', displayText: 'นาย' },
  { value: 'ms', displayText: 'นางสาว' },
  { value: 'mrs', displayText: 'นาง' },
  { value: 'other', displayText: 'อื่นๆ' }
]
