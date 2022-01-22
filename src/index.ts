import { Service } from 'ility/lib/types';

import { OAS2Parser } from './parser';

export default function parse(input: string): Service {
  return new OAS2Parser(JSON.parse(input)).parse();
}
