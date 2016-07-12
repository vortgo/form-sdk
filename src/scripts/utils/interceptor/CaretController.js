/**
* Этот класс помогает управлять положением выделения (курсора).
*/
export class CaretController {
  /**
   * Конструктор класса
   * Текущее положение курсора доступно в свойстве currentSelection
   * @param  {array} params     параметры:
   *   previousSelection {integer}  предыдущее положение курсора
   *   currentSelection {integer}   текущее положение курсора
   * @return {[type]}           [description]
   */
  constructor(...params) {
    [
      this.previousSelection,
      this.currentSelection,
      this.offset
    ] = params;
  }

  /**
   * Перемещает курсор на указанное расстояние (offset)
   * положительный offset - курсор смещается вправо, отрицательный - влево
   * @param  {integer} offset  значение, на которое нужно сместить курсор
   * @return {[type]}        [description]
   */
  moveBy(offset) {
    this.currentSelection = this.currentSelection + offset;
  }

  /**
   * Возвращает прежнее место курсора
   * @return {integer} старое положение курсора
   */
  rollback() {
    this.currentSelection = this.currentSelection - this.offset;
  }

}
