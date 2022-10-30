import * as assertions from '../assertions';
import { PROPERTY_TYPES } from '../enums';
export const formatProperties = (entity: { type: PROPERTY_TYPES }) => {
  function formatDate(date: {
    start: string | null;
    end: string | null;
    time_zone: string | null;
  }) {
    if (date === null) {
      return date;
    }

    const isRange = date.start && date.end;

    if (isRange) {
      return `${date.start}/${date.end}`;
    }

    if (date.start) {
      return date.start;
    }

    return date.end;
  }

  function formatMultiSelect(
    multi_select: {
      name: string;
    }[]
  ) {
    if (multi_select.length === 0) {
      return null;
    }

    return multi_select.map(({ name }) => name);
  }

  function formatRelation(
    relation: {
      id: string;
    }[]
  ) {
    if (relation.length === 0) {
      return null;
    }

    return relation.map(({ id }) => id);
  }

  function formatTitle(
    title: {
      plain_text: string;
    }[]
  ) {
    return title.map(({ plain_text }) => plain_text).join(' ');
  }

  function formatRichText(
    rich_text: {
      plain_text: string;
    }[]
  ) {
    if (rich_text.length === 0) {
      return null;
    }

    return rich_text.map(({ plain_text }) => plain_text).join(' ');
  }

  function formatFiles(
    files: {
      type: 'external' | 'file';
      external?: {
        url: string;
      };
      file?: {
        url: string;
      };
    }[]
  ) {
    if (files.length === 0) {
      return null;
    }

    const urls = files.map((file) => {
      if (file.external) {
        return file.external.url;
      }

      return file.file!.url;
    });

    if (urls.length === 1) {
      return urls[0];
    }

    return urls;
  }
  function formatFormula(formula: { expression: unknown }) {
    return formula.expression;
  }

  function formatSelect(select: { name: string }) {
    return select.name;
  }

  function formatStatus(status: { name: string }) {
    return status.name;
  }
  if (entity.type === 'number') {
    assertions.assertsIsNumber(entity);

    return entity.number;
  }

  if (entity.type === 'formula') {
    assertions.assertsIsFormula(entity);

    return formatFormula(entity.formula);
  }

  if (entity.type === 'select') {
    assertions.assertsIsSelect(entity);

    return entity.select ? formatSelect(entity.select) : null;
  }

  if (entity.type === 'multi_select') {
    assertions.assertsIsMultiSelect(entity);

    return formatMultiSelect(entity.multi_select);
  }

  if (entity.type === 'status') {
    assertions.assertsIsStatus(entity);

    return entity.status ? formatStatus(entity.status) : null;
  }

  if (entity.type === 'relation') {
    assertions.assertsIsRelation(entity);

    return formatRelation(entity.relation);
  }

  if (entity.type === 'title') {
    assertions.assertsIsTitle(entity);

    return formatTitle(entity.title);
  }

  if (entity.type === 'rich_text') {
    assertions.assertsIsRichText(entity);

    return formatRichText(entity.rich_text);
  }

  if (entity.type === 'url') {
    assertions.assertsIsUrl(entity);

    return entity.url;
  }

  if (entity.type === 'people') {
    assertions.assertsIsPeople(entity);

    return entity.people;
  }

  if (entity.type === 'files') {
    assertions.assertsIsFiles(entity);

    return formatFiles(entity.files);
  }

  if (entity.type === 'email') {
    assertions.assertsIsEmail(entity);

    return entity.email;
  }

  if (entity.type === 'phone_number') {
    assertions.assertsIsPhoneNumber(entity);

    return entity.phone_number;
  }

  if (entity.type === 'date') {
    assertions.assertsIsDate(entity);

    return formatDate(entity.date);
  }

  if (entity.type === 'checkbox') {
    assertions.assertsIsCheckbox(entity);

    return entity.checkbox;
  }

  if (entity.type === 'created_by') {
    assertions.assertsIsCreatedBy(entity);

    return entity.created_by;
  }

  if (entity.type === 'created_time') {
    assertions.assertsIsCreatedTime(entity);

    return entity.created_time;
  }

  if (entity.type === 'last_edited_by') {
    assertions.assertsIsLasteEditedBy(entity);

    return entity.last_edited_by;
  }

  if (entity.type === 'last_edited_time') {
    assertions.assertsIsLastEditedTime(entity);

    return entity.last_edited_time;
  }
};
