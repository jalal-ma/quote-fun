const quotes = [
  {
    quote:
      'In the real world, the smartest people are people who make mistakes and learn. In school, the smartest people don’t make mistakes.',
    author: 'Robert Kiyosaki'
  },
  {
    quote:
      'Discipline has within it the potential for creating future miracles.',
    author: 'Jim Rohn'
  },
  {
    quote:
      'The quality of your life is in direct proportion to the quality of your relationships.',
    author: 'Anthony Robbins'
  },
  {
    quote: 'How do we change the world? One random act of kindness at a time.',
    author: 'Morgan Freeman'
  },
  {
    quote:
      'Happiness is when what you think, what you say, and what you do are in harmony.',
    author: 'Mahatma Gandhi'
  },
  {
    quote:
      'The fear of being different prevents most people from seeking new ways to solve their problems.',
    author: 'Robert Kiyosaki'
  },
  {
    quote:
      'What is the point of being on this Earth if you are going to be like everyone else?',
    author: 'Arnold Schwarzenegger'
  },
  {
    quote:
      'I’ve never seen a “part-time” super successful, high performance person.',
    author: 'Dan Peña'
  },
  {
    quote:
      'The weak can never forgive. Forgiveness is the attribute of the strong.',
    author: 'Mahatma Gandhi'
  },
  {
    quote:
      'It’s more important to grow your income than cut your expenses. It’s more important to grow your spirit that cut your dreams.',
    author: 'Robert Kiyosaki'
  },
  {
    quote:
      'The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.',
    author: 'Arnold Schwarzenegger'
  },
  {
    quote:
      'People who fail focus on what they will have to go through; people who succeed focus on what it will feel like at the end.',
    author: 'Anthony Robbins'
  },
  {
    quote: 'As long as you feel like a victim, you are one.',
    author: 'Morgan Freeman'
  },
  {
    quote:
      'You must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.',
    author: 'Mahatma Gandhi'
  },
  {
    quote: 'Life may be full of pain but that’s not an excuse to give up.',
    author: 'Arnold Schwarzenegger'
  }
];

// Create Notification
function createNotification(msg) {
  const info = document.createElement('div');
  const text = document.createTextNode(msg);
  info.appendChild(text);
  info.classList.add('info');
  document.body.appendChild(info);

  setTimeout(() => {
    info.remove();
    document.querySelector('.quote-input').value = '';
    document.querySelector('.author-input').value = '';
  }, 3000);
}

// Add A New Quote
const addNewQuoteBtn = document.querySelector('.add-quote');

function addNewQuote(e) {
  e.preventDefault();

  const quoteInput = document.querySelector('.quote-input').value;
  const authorInput = document.querySelector('.author-input').value;

  if (quoteInput === '' || authorInput === '') {
    const info = document.createElement('div');
    const text = document.createTextNode('Please fill in the fields first!');
    info.appendChild(text);
    info.classList.add('info');
    document.body.appendChild(info);

    setTimeout(() => {
      info.remove();
      document.querySelector('.quote-input').value = '';
      document.querySelector('.author-input').value = '';
    }, 3000);
  } else {
    quotes.push({ quote: quoteInput, author: authorInput });

    createNotification('Quote Added Successfully!');
  }
}

addNewQuoteBtn.addEventListener('click', addNewQuote);

// Remove Last Added Quote
const removeLastQuoteBtn = document.querySelector('.remove-last');

function removeLastAddedQuote(e) {
  e.preventDefault();
  if (quotes.length > 15) {
    quotes.pop();
    createNotification('Last Added Quote Removed!');
  } else {
    createNotification('Nothing to be removed.');
  }
}

removeLastQuoteBtn.addEventListener('click', removeLastAddedQuote);

// Show Random Quote
const showRandomQuoteBtn = document.querySelector('.show-quote');

function showRandomQuote(e) {
  e.preventDefault();
  const rand = Math.floor(Math.random() * quotes.length);

  const quotesDiv = document.querySelector('.quotes');
  quotesDiv.innerHTML = `
    <div class="quote">
      <p>"${quotes[rand].quote}"</p>
      <span class="bold">
        – ${quotes[rand].author} 
      </span>
    </div>
  `;
}

showRandomQuoteBtn.addEventListener('click', showRandomQuote);

// Show All Quotes
const showQuotesBtn = document.querySelector('.show-all');

function showAllQuotes(e) {
  e.preventDefault();

  const quotesDiv = document.querySelector('.quotes');
  quotesDiv.innerHTML = '';

  quotes.forEach(quote => {
    quotesDiv.innerHTML += `
    <div class="quote">
      <p>"${quote.quote}"</p>
      <span class="bold">
        – ${quote.author} 
      </span>
    </div>
  `;
  });
}

showQuotesBtn.addEventListener('click', showAllQuotes);
