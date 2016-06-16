const validation = require('./lib/validation.js');

module.exports = {
  name: 'Kitten Name Selector',
  description: 'Select a kitten name',
  validation: {
    kittenNameSelectorValidation: validation,
    puppyNameSelectorValidation: validation,
  },
  inputs: {
    kittenNameSelector: {
      validation: {
        function: 'kittenNameSelectorValidation',
        on: 'blur',
      },
      label: 'Choose a kitten name',
      options: [
        { label: 'Michaelangelo',
          value: 'mike',
        },
        { label: 'Leonardo',
          value: 'leo',
        },
        { label: 'Raphael',
          value: 'ralph',
        },
        { label: 'Donatello',
          value: 'don',
        },
        { label: 'Muffins',
          value: 'muffy',
        },
        { label: 'Jeff',
          value: 'jeff',
        },
      ],
      type: 'select',
      settings: {
        empty: false,
      },
    },
    puppyNameSelector: {
      validation: {
        function: 'puppyNameSelectorValidation',
        on: 'blur',
      },
      label: 'Choose a puppy name',
      options: [
        { label: 'Tinky Winky',
          value: 'tink',
        },
        { label: 'Dipsy',
          value: 'dip',
        },
        { label: 'Laa-Laa',
          value: 'la',
        },
        { label: 'Po',
          value: 'po',
        },
        { label: 'Brownie',
          value: 'bro',
        },
        { label: 'Kevin',
          value: 'kev',
        },
      ],
      type: 'select',
      settings: {
        empty: false,
      },
    },
  },
  html: '<label for="{{kittenNameSelector.id}}">{{kittenNameSelector.label}}</label><select id="{{kittenNameSelector.id}}" name="{{kittenNameSelector.name}}">{% for option in select.options %}<option value="{{option.value}}" {% if option.value == select.value %}selected{% endif %}>{{option.label}}</option>{% endfor %}</select></label><label for="{{puppyNameSelector.id}}">{{puppyNameSelector.label}}</label><select id="{{puppyNameSelector.id}}" name="{{puppyNameSelector.name}}">{% for option in select.options %}<option value="{{option.value}}" {% if option.value == select.value %}selected{% endif %}>{{option.label}}</option>{% endfor %}</select></label>',
};
