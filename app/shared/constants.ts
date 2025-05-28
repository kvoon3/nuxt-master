import type { ChatMessage } from '~/types'

export const defaultChatMessages: ChatMessage[] = [
  {
    role: 'user',
    content: 'Hi, how are you today?',
  },
  {
    role: 'assistant',
    content: 'I am fine, thanks! How about yourself?',
  },
  {
    role: 'user',
    content: 'I\'m doing pretty well. The weather is nice today, isn\'t it?',
  },
  {
    role: 'assistant',
    content: 'Yes, it\'s beautiful outside! Are you planning to enjoy the weather? Maybe go for a walk?',
  },
  {
    role: 'user',
    content: 'That\'s a good idea. I was thinking about going to the park later. Do you have any recommendations for things to do there?',
  },
  {
    role: 'assistant',
    content: 'Central Park has some lovely walking trails. You could bring a book, have a picnic, or just people-watch. There\'s also bike rentals if you want to explore more area.',
  },
  {
    role: 'user',
    content: 'A picnic sounds nice! What should I bring for a simple picnic?',
  },
  {
    role: 'assistant',
    content: 'For a simple picnic, I\'d recommend sandwiches, some fresh fruit, maybe cheese and crackers, and don\'t forget drinks! A blanket to sit on would be good too.',
  },
  {
    role: 'user',
    content: 'Great suggestions! By the way, what\'s your favorite type of sandwich?',
  },
  {
    role: 'assistant',
    content: 'I\'m partial to a classic BLT with avocado added. The crunch of the bacon with the creaminess of avocado is perfect! What about you?',
  },
  {
    role: 'user',
    content: 'I love a good turkey club. Speaking of food, do you know any good recipes for homemade lemonade?',
  },
  {
    role: 'assistant',
    content: 'Absolutely! For fresh lemonade: squeeze 6 lemons (about 1 cup juice), mix with 1 cup sugar (adjust to taste) and 4 cups cold water. Add mint or berries for extra flavor!',
  },
  {
    role: 'user',
    content: 'That sounds refreshing! Changing topics - have you read any good books lately?',
  },
  {
    role: 'assistant',
    content: 'I recently enjoyed \'Project Hail Mary\' by Andy Weir - great sci-fi with humor. For non-fiction, \'Atomic Habits\' is fantastic for productivity tips. Any recommendations from your side?',
  },
  {
    role: 'user',
    content: 'I\'m currently reading \'The Midnight Library\' - really makes you think about life choices. Say, what do you think about audiobooks versus physical books?',
  },
  {
    role: 'assistant',
    content: 'Both have merits! Audiobooks are great for multitasking (driving, chores), while physical books offer that tactile experience. I often switch between both depending on my mood and activity.',
  },
  {
    role: 'user',
    content: 'Makes sense. By the way, I need to buy a birthday present for my niece. Any ideas for a 10-year-old?',
  },
  {
    role: 'assistant',
    content: 'Popular options: craft kits, STEM toys, books in her favorite genre, or experience gifts like a zoo membership. Does she have particular interests?',
  },
  {
    role: 'user',
    content: 'She loves animals and science. Maybe a science kit with animals?',
  },
  {
    role: 'assistant',
    content: 'Perfect! There are great kits like ant farms, butterfly gardens, or microscope sets with prepared animal slides. Pair it with a kids\' wildlife book for extra impact!',
  },
]
