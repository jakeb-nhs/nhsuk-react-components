import * as index from '../index';

describe('Index', () => {
  it('contains all expected elements', () => {
    const sortedIndex = Object.keys(index).sort();

    expect(sortedIndex).toEqual([
      'ActionLink',
      'ArrowLeftIcon',
      'ArrowRightCircleIcon',
      'ArrowRightIcon',
      'BackLink',
      'BodyText',
      'Breadcrumb',
      'Button',
      'ButtonLink',
      'Card',
      'Checkboxes',
      'ChevronLeftIcon',
      'ChevronRightIcon',
      'Clearfix',
      'CloseIcon',
      'Col',
      'Container',
      'ContentsList',
      'CrossIcon',
      'DateInput',
      'DefaultButton',
      'Details',
      'DoAndDontList',
      'EmdashIcon',
      'ErrorMessage',
      'ErrorSummary',
      'Fieldset',
      'Footer',
      'Form',
      'Header',
      'Hero',
      'HintText',
      'Images',
      'InsetText',
      'Label',
      'LedeText',
      'ListPanel',
      'MinusIcon',
      'NavAZ',
      'Pagination',
      'PlusIcon',
      'Radios',
      'ReadingWidth',
      'ReviewDate',
      'Row',
      'SearchIcon',
      'Select',
      'SkipLink',
      'SmallEmdashIcon',
      'SummaryList',
      'Table',
      'Tag',
      'TextInput',
      'Textarea',
      'TickIcon',
      'WarningCallout',
      'useFormContext',
    ]);
  });
});
