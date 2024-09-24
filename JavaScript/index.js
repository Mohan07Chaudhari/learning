
const booksInput = [
    {
      bookName: "Book 1",
      chapters: [
        {
          chapterName: "Chapter 1",
          exercises: 50,
        },
        {
          chapterName: "Chapter 2",
          exercises: 50,
        },
      ],
    },
    {
      bookName: "Book 2",
      chapters: [
        {
          chapterName: "Chapter 1",
          exercises: 50,
        },
        {
          chapterName: "Chapter 2",
          exercises: 30,
        },
        {
          chapterName: "Chapter 3",
          exercises: 20,
        },
      ],
    },
    {
      bookName: "Book 3",
      chapters: [
        {
          chapterName: "Chapter 1",
          exercises: 50,
        },
        {
          chapterName: "Chapter 2",
          exercises: 50,
        },
        {
          chapterName: "Chapter 3",
          exercises: 20,
        },
        {
          chapterName: "Chapter 4",
          exercises: 80,
        },
      ],
    },
    {
      bookName: "Book 4",
      chapters: [
        {
          chapterName: "Chapter 1",
          exercises: 50,
        },
        {
          chapterName: "Chapter 2",
          exercises: 80,
        },
        {
          chapterName: "Chapter 3",
          exercises: 70,
        },
      ],
    },
  ]
  
  // Initialise the currentReadCount to 0;
  let currentReadCount = 0
  
  // Initialise the dailyTargetReadCount to 100;
  let dailyTargetReadCount = 100
  
  // Initialise the beginingRead to first excersise from first chapter of first book.
  let beginingRead = {
    bookName: "Book 1",
    chapterName: "Chapter 1",
    exerciseNo: 1,
  }
  
  function printExcersise(books) {
    let totalBooksLength = books.length
  
    // Iterate over books and chapters.
    for (let i = 0; i < books.length; i++) {
      let book = books[i]
      let chapters = book.chapters
  
      for (let j = 0; j < chapters.length; j++) {
        let chapter = chapters[j]
        let excersises = chapter.exercises
  
        // If dailyTargetReadCount (100) is not reached.
        if (currentReadCount + excersises < dailyTargetReadCount) {
          currentReadCount = currentReadCount + excersises
        } else if (currentReadCount + excersises === dailyTargetReadCount) {
          // If dailyTargetReadCount (100) is reached.
          printOutput(book.bookName, chapter.chapterName, chapter.exercises)
          currentReadCount = 0
  
          if (j < chapters.length - 1) {
            // If Book has Chapters remaining.
            let currentChapterIndex = j
            let nextChapter = chapters[++currentChapterIndex]
  
            beginingRead.chapterName = nextChapter.chapterName
            beginingRead.exerciseNo = 1
          } else if (i < totalBooksLength - 1) {
            // If Book has no Chapters remaining then move to next book.
            let currentBookIndex = i
            let nextBook = books[++currentBookIndex]
  
            beginingRead.bookName = nextBook.bookName
            beginingRead.chapterName = nextBook.chapters[0].chapterName
            beginingRead.exerciseNo = 1
          }
        } else if (currentReadCount + excersises > dailyTargetReadCount) {
          // If currentReadCount + excersises is more than 100.
  
          let extra = currentReadCount + excersises - dailyTargetReadCount
          let endIndex = chapter.exercises - extra
  
          printOutput(book.bookName, chapter.chapterName, endIndex)
  
          beginingRead.chapterName = chapter.chapterName
          beginingRead.exerciseNo = endIndex + 1
          currentReadCount = extra
        }
      }
    }
  
  }
  
  function printOutput(endingBookName, endingChapterName, endingExerciseNo) {
    const beginingText = `Begining:    Book: ${beginingRead.bookName}   Chapter: ${beginingRead.chapterName}    Exercise: ${beginingRead.exerciseNo} \n`;
    const endingText = `Ending:      Book: ${endingBookName}   Chapter: ${endingChapterName}    Exercise: ${endingExerciseNo} \n\n\n`;

    console.log(beginingText);
    console.log(endingText);

    let beginingNode = document.createElement("pre");
    beginingNode.innerText = beginingText; 
    document.body.appendChild(beginingNode);

    let endingNode = document.createElement("pre");
    endingNode.innerText = endingText; 
    document.body.appendChild(endingNode);
}
 
// Uncomment to show without clicking on button.
//  printExcersise(booksInput)
  
function showResult() {
    printExcersise(booksInput);
}