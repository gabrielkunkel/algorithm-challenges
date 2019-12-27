const findDescendants = require('../../lib/projects/descendants');
const data = require('../../data/descendantsData');

describe('finding descendents function', () => {
    
    const joyMadden = 	{
		"id": 693243224,
		"firstName": "Joy",
		"lastName": "Madden",
		"gender": "female",
		"dob": "4/20/1939",
		"height": 69,
		"weight": 199,
		"eyeColor": "hazel",
		"occupation": "doctor",
		"parents": [],
		"currentSpouse": null
    }

    const kids = [
        {
            "id": 822843554,
            "firstName": "Regina",
            "lastName": "Madden",
            "gender": "female",
            "dob": "7/26/1959",
            "height": 71,
            "weight": 249,
            "eyeColor": "brown",
            "occupation": "nurse",
            "parents": [693243224, 888201200],
            "currentSpouse": null
        },
        {
            "id": 819168108,
            "firstName": "Hana",
            "lastName": "Madden",
            "gender": "female",
            "dob": "10/7/1953",
            "height": 70,
            "weight": 187,
            "eyeColor": "brown",
            "occupation": "politician",
            "parents": [693243224, 888201200],
            "currentSpouse": null
        },
        {
            "id": 969837479,
            "firstName": "Eloise",
            "lastName": "Madden",
            "gender": "female",
            "dob": "12/11/1961",
            "height": 63,
            "weight": 241,
            "eyeColor": "brown",
            "occupation": "assistant",
            "parents": [693243224, 888201200],
            "currentSpouse": null
        },
        {
            "id": 313207561,
            "firstName": "Mattias",
            "lastName": "Madden",
            "gender": "male",
            "dob": "2/19/1966",
            "height": 70,
            "weight": 110,
            "eyeColor": "blue",
            "occupation": "assistant",
            "parents": [693243224, 888201200],
            "currentSpouse": 313997561
        }
    ]

    const grandchildren = [
        {
            "id": 313998000,
            "firstName": "Joey",
            "lastName": "Madden",
            "gender": "female",
            "dob": "2/02/1987",
            "height": 67,
            "weight": 100,
            "eyeColor": "blue",
            "occupation": "doctor",
            "parents": [313207561, 313997561],
            "currentSpouse": null
        }
    ]

    const allDescend = [
        {
          id: 822843554,
          firstName: 'Regina',
          lastName: 'Madden',
          gender: 'female',
          dob: '7/26/1959',
          height: 71,
          weight: 249,
          eyeColor: 'brown',
          occupation: 'nurse',
          parents: [ 693243224, 888201200 ],
          currentSpouse: null
        },
        {
          id: 819168108,
          firstName: 'Hana',
          lastName: 'Madden',
          gender: 'female',
          dob: '10/7/1953',
          height: 70,
          weight: 187,
          eyeColor: 'brown',
          occupation: 'politician',
          parents: [ 693243224, 888201200 ],
          currentSpouse: null
        },
        {
          id: 969837479,
          firstName: 'Eloise',
          lastName: 'Madden',
          gender: 'female',
          dob: '12/11/1961',
          height: 63,
          weight: 241,
          eyeColor: 'brown',
          occupation: 'assistant',
          parents: [ 693243224, 888201200 ],
          currentSpouse: null
        },
        {
          id: 313998000,
          firstName: 'Joey',
          lastName: 'Madden',
          gender: 'female',
          dob: '2/02/1987',
          height: 67,
          weight: 100,
          eyeColor: 'blue',
          occupation: 'doctor',
          parents: [ 313207561, 313997561 ],
          currentSpouse: null
        },
        {
          id: 313207561,
          firstName: 'Mattias',
          lastName: 'Madden',
          gender: 'male',
          dob: '2/19/1966',
          height: 70,
          weight: 110,
          eyeColor: 'blue',
          occupation: 'assistant',
          parents: [ 693243224, 888201200 ],
          currentSpouse: 313997561
        }
      ];
    
    it('returns an array', () => {
        expect(Array.isArray(findDescendants(joyMadden, data, []))).toBe(true);
    });

    it('gives us joy madden\'s four kids', () => {
        expect(findDescendants(joyMadden, data)).not.toEqual(kids);
    });

    it('gives us the grandchildren and the kids', () => {
        let output = findDescendants(joyMadden, data)
        expect(output).toEqual(allDescend);
    });



});