export interface ICard {
  img: string
  title?: string
  btnText?: string
  imgBtn?: any
  styleBack?: string | number
  backColor?: string
  id?: string
  minHeight?: string
  category?: string
  addHero?: () => void
  findIndex?: () => void
  deleteItem?: () => void
}
