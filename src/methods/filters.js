export function changeToMoney (number) {
  // 將數字轉換為整數
  const integerNumber = Math.round(number)

  // 使用正規表達式將整數以包含逗號的格式轉換
  const formattedNumber = integerNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // 返回結果
  return formattedNumber
}

export function changeDate (time) {
  // 使用Date物件轉換為日期
  const dateObject = new Date(time * 1000) // 乘以1000是因為JavaScript使用的是毫秒而非秒

  // 取得年、月、日
  const year = dateObject.getFullYear()
  const month = ('0' + (dateObject.getMonth() + 1)).slice(-2) // 月份從0開始，因此要加1，並確保是兩位數
  const day = ('0' + dateObject.getDate()).slice(-2) // 確保是兩位數

  // 構建日期字串
  const dateString = `${year}-${month}-${day}`

  // 返回結果
  return dateString
}
