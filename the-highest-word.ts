export const theHighestWord = (sentence: string) => {
  interface Word {
    content: string,
    score: number,
  }
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'
  let wordsArray:Array<Word> = []

  sentence.split(' ').forEach(word => {
    let wordScore:number = 0

    word.split("").forEach(letter => {
      let letterScore = alphabet.split("").indexOf(letter.toLowerCase())
      wordScore += letterScore
    })

    let actualWord:Word = {content: word, score: wordScore}
    wordsArray = [...wordsArray, actualWord]
  })

  return wordsArray.sort((first:Word, second:Word) => {
    if (first.score < second.score) return 1
    else if (first.score > second.score) return -1
    return 0
  })[0]
}
