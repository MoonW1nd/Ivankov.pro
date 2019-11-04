import {path} from 'ramda';

export const selectSiteMetadata = <T, D>(data: T, prop: string): D | undefined =>
    path(['site', 'siteMetadata', prop], data);
