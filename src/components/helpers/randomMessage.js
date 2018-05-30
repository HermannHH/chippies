function randomMessage() {
  const messages = [
    'Even superheroes have sidekicks',
    'Stand up and stretch',
    'Your business\' best friend',
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export default randomMessage;
