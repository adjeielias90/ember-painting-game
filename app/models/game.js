import DS from 'ember-data';

  const TEMPLATES=[
  [ 
    "yellow", "white", "yellow", "white", "yellow", "white", 
    "yellow", "white", "yellow", "white", "white", 
    "yellow", "white", "yellow", "white", "yellow", "white", 
    "yellow", "white", "yellow", "yellow", "white", "yellow", 
    "white", "yellow", "white", "yellow", "white", "yellow",
    "white", "white", "yellow", "white", "yellow", "white", "yellow", "white", "yellow", "white", "yellow",
    "yellow", "white", "yellow", "white", "yellow", "white", "yellow", "white", "yellow", "white", 
    "white", "yellow", "white", "yellow", "white", 
    "yellow", "white", "yellow", "white", "yellow", 
    "yellow", "white", "yellow", "white", "yellow", 
    "white", "yellow", "white", "yellow", "white", 
    "white", "yellow", "white", "yellow", "white", 
    "yellow", "white", "yellow", "white", "yellow", 
    "yellow", "white", "yellow", "white", "yellow", 
    "white", "yellow", "white", "yellow", "white", 
    "white", "yellow", "white", "yellow", "white", 
    "yellow", "white", "yellow", "white", "yellow" 
    ],
  [ 
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", 
    "white", "white", "blue", "blue", "blue", "white", "blue", 
    "blue", "blue", "blue", "blue", "white", "white", "blue", "blue", "white", "white", "blue", "blue", "blue", "black", "blue", "blue", "blue", 
    "black", "blue", "blue", "blue", "blue", "blue", "black", "black", "black", "black", "black", "blue", "blue", 
    "blue", "blue", "blue", "black", "black", "black", "black", "black", "blue", "blue", "blue", "blue", "blue", "black", "black", "black", "black", "black", "black", "black", "black", "blue", "teal", "teal", "black", "pink", "black", "black", "black", "black", "black", "teal", "teal", "teal", "black", "black", "black", "black", "black", "black", 
    "black", "teal", "teal", "teal", "black", "teal", "black", "teal", "black", "teal", "black", "black" 
  ]
  ]

export default DS.Model.extend({
  templatePicture: DS.belongsTo('picture', {async: false}),
  playerPicture: DS.belongsTo('picture', {async: false}),

  init(){
    this._super(...arguments);
    
    this.set('templatePicture', this.store.createRecord('picture'));
    this.set('playerPicture', this.store.createRecord('picture'));
  
  },
  pickRandomTemplate(){
    let randomTemplate = TEMPLATES[Math.floor(Math.random()*TEMPLATES.length)];
    this.templatePicture.load(randomTemplate);
    this.playerPicture.clear();
  }
});
