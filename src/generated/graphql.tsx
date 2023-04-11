import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  Dimension: any
  HexColor: any
  JSON: any
  Quality: any
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface Asset {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']>
  sys: Sys
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetContentTypeArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetFileNameArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetHeightArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetSizeArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetTitleArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetUrlArgs {
  locale?: InputMaybe<Scalars['String']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetWidthArgs {
  locale?: InputMaybe<Scalars['String']>
}

export interface AssetCollection {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface AssetFilter {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']>
  contentType_contains?: InputMaybe<Scalars['String']>
  contentType_exists?: InputMaybe<Scalars['Boolean']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentType_not?: InputMaybe<Scalars['String']>
  contentType_not_contains?: InputMaybe<Scalars['String']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName?: InputMaybe<Scalars['String']>
  fileName_contains?: InputMaybe<Scalars['String']>
  fileName_exists?: InputMaybe<Scalars['Boolean']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName_not?: InputMaybe<Scalars['String']>
  fileName_not_contains?: InputMaybe<Scalars['String']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  height?: InputMaybe<Scalars['Int']>
  height_exists?: InputMaybe<Scalars['Boolean']>
  height_gt?: InputMaybe<Scalars['Int']>
  height_gte?: InputMaybe<Scalars['Int']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  height_lt?: InputMaybe<Scalars['Int']>
  height_lte?: InputMaybe<Scalars['Int']>
  height_not?: InputMaybe<Scalars['Int']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size?: InputMaybe<Scalars['Int']>
  size_exists?: InputMaybe<Scalars['Boolean']>
  size_gt?: InputMaybe<Scalars['Int']>
  size_gte?: InputMaybe<Scalars['Int']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size_lt?: InputMaybe<Scalars['Int']>
  size_lte?: InputMaybe<Scalars['Int']>
  size_not?: InputMaybe<Scalars['Int']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  width?: InputMaybe<Scalars['Int']>
  width_exists?: InputMaybe<Scalars['Boolean']>
  width_gt?: InputMaybe<Scalars['Int']>
  width_gte?: InputMaybe<Scalars['Int']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  width_lt?: InputMaybe<Scalars['Int']>
  width_lte?: InputMaybe<Scalars['Int']>
  width_not?: InputMaybe<Scalars['Int']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export interface AssetLinkingCollections {
  __typename?: 'AssetLinkingCollections'
  contenidosTransversalesCollection?: Maybe<ContenidosTransversalesCollection>
  entryCollection?: Maybe<EntryCollection>
  seccionProyectosInternaDeProyectosCollection?: Maybe<SeccionProyectosInternaDeProyectosCollection>
  transversalCollection?: Maybe<TransversalCollection>
}

export interface AssetLinkingCollectionsContenidosTransversalesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export interface AssetLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export interface AssetLinkingCollectionsSeccionProyectosInternaDeProyectosCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export interface AssetLinkingCollectionsTransversalCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export type ContenidosTransversales = Entry & {
  __typename?: 'ContenidosTransversales'
  contentfulMetadata: ContentfulMetadata
  descripcionPrincipal?: Maybe<ContenidosTransversalesDescripcionPrincipal>
  enlacePrincipal?: Maybe<Scalars['String']>
  imgenesPrincipalesCollection?: Maybe<AssetCollection>
  linkedFrom?: Maybe<ContenidosTransversalesLinkingCollections>
  referenciasPrincipalesCollection?: Maybe<ContenidosTransversalesReferenciasPrincipalesCollection>
  sys: Sys
  titulo?: Maybe<Scalars['String']>
  tituloPrincipal?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export interface ContenidosTransversalesDescripcionPrincipalArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export interface ContenidosTransversalesEnlacePrincipalArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export interface ContenidosTransversalesImgenesPrincipalesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export interface ContenidosTransversalesLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export interface ContenidosTransversalesReferenciasPrincipalesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export interface ContenidosTransversalesTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/contenidosTransversales) */
export interface ContenidosTransversalesTituloPrincipalArgs {
  locale?: InputMaybe<Scalars['String']>
}

export interface ContenidosTransversalesCollection {
  __typename?: 'ContenidosTransversalesCollection'
  items: Array<Maybe<ContenidosTransversales>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface ContenidosTransversalesDescripcionPrincipal {
  __typename?: 'ContenidosTransversalesDescripcionPrincipal'
  json: Scalars['JSON']
  links: ContenidosTransversalesDescripcionPrincipalLinks
}

export interface ContenidosTransversalesDescripcionPrincipalAssets {
  __typename?: 'ContenidosTransversalesDescripcionPrincipalAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export interface ContenidosTransversalesDescripcionPrincipalEntries {
  __typename?: 'ContenidosTransversalesDescripcionPrincipalEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export interface ContenidosTransversalesDescripcionPrincipalLinks {
  __typename?: 'ContenidosTransversalesDescripcionPrincipalLinks'
  assets: ContenidosTransversalesDescripcionPrincipalAssets
  entries: ContenidosTransversalesDescripcionPrincipalEntries
}

export interface ContenidosTransversalesFilter {
  AND?: InputMaybe<Array<InputMaybe<ContenidosTransversalesFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ContenidosTransversalesFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  descripcionPrincipal_contains?: InputMaybe<Scalars['String']>
  descripcionPrincipal_exists?: InputMaybe<Scalars['Boolean']>
  descripcionPrincipal_not_contains?: InputMaybe<Scalars['String']>
  enlacePrincipal?: InputMaybe<Scalars['String']>
  enlacePrincipal_contains?: InputMaybe<Scalars['String']>
  enlacePrincipal_exists?: InputMaybe<Scalars['Boolean']>
  enlacePrincipal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  enlacePrincipal_not?: InputMaybe<Scalars['String']>
  enlacePrincipal_not_contains?: InputMaybe<Scalars['String']>
  enlacePrincipal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imgenesPrincipalesCollection_exists?: InputMaybe<Scalars['Boolean']>
  referenciasPrincipalesCollection_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  titulo?: InputMaybe<Scalars['String']>
  tituloPrincipal?: InputMaybe<Scalars['String']>
  tituloPrincipal_contains?: InputMaybe<Scalars['String']>
  tituloPrincipal_exists?: InputMaybe<Scalars['Boolean']>
  tituloPrincipal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  tituloPrincipal_not?: InputMaybe<Scalars['String']>
  tituloPrincipal_not_contains?: InputMaybe<Scalars['String']>
  tituloPrincipal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_contains?: InputMaybe<Scalars['String']>
  titulo_exists?: InputMaybe<Scalars['Boolean']>
  titulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_not?: InputMaybe<Scalars['String']>
  titulo_not_contains?: InputMaybe<Scalars['String']>
  titulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ContenidosTransversalesLinkingCollections {
  __typename?: 'ContenidosTransversalesLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export interface ContenidosTransversalesLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum ContenidosTransversalesOrder {
  EnlacePrincipalAsc = 'enlacePrincipal_ASC',
  EnlacePrincipalDesc = 'enlacePrincipal_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TituloPrincipalAsc = 'tituloPrincipal_ASC',
  TituloPrincipalDesc = 'tituloPrincipal_DESC',
  TituloAsc = 'titulo_ASC',
  TituloDesc = 'titulo_DESC'
}

export interface ContenidosTransversalesReferenciasPrincipalesCollection {
  __typename?: 'ContenidosTransversalesReferenciasPrincipalesCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface ContentfulMetadata {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export interface ContentfulMetadataFilter {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']>
}

export interface ContentfulMetadataTagsFilter {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export interface ContentfulTag {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export interface Entry {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export interface EntryCollection {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface EntryFilter {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export type Home = Entry & {
  __typename?: 'Home'
  bannerPrincipalCollection?: Maybe<HomeBannerPrincipalCollection>
  contentfulMetadata: ContentfulMetadata
  informacionProyectos?: Maybe<HomeInformacionProyectos>
  linkedFrom?: Maybe<HomeLinkingCollections>
  metaDescripcion?: Maybe<Scalars['String']>
  metaTitulo?: Maybe<Scalars['String']>
  proyectosCollection?: Maybe<HomeProyectosCollection>
  sys: Sys
  titulo?: Maybe<Scalars['String']>
  tituloPrincipal?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeBannerPrincipalCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeInformacionProyectosArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeMetaDescripcionArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeMetaTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeProyectosCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/home) */
export interface HomeTituloPrincipalArgs {
  locale?: InputMaybe<Scalars['String']>
}

export interface HomeBannerPrincipalCollection {
  __typename?: 'HomeBannerPrincipalCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface HomeCollection {
  __typename?: 'HomeCollection'
  items: Array<Maybe<Home>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface HomeFilter {
  AND?: InputMaybe<Array<InputMaybe<HomeFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HomeFilter>>>
  bannerPrincipalCollection_exists?: InputMaybe<Scalars['Boolean']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  informacionProyectos_contains?: InputMaybe<Scalars['String']>
  informacionProyectos_exists?: InputMaybe<Scalars['Boolean']>
  informacionProyectos_not_contains?: InputMaybe<Scalars['String']>
  metaDescripcion?: InputMaybe<Scalars['String']>
  metaDescripcion_contains?: InputMaybe<Scalars['String']>
  metaDescripcion_exists?: InputMaybe<Scalars['Boolean']>
  metaDescripcion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescripcion_not?: InputMaybe<Scalars['String']>
  metaDescripcion_not_contains?: InputMaybe<Scalars['String']>
  metaDescripcion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitulo?: InputMaybe<Scalars['String']>
  metaTitulo_contains?: InputMaybe<Scalars['String']>
  metaTitulo_exists?: InputMaybe<Scalars['Boolean']>
  metaTitulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitulo_not?: InputMaybe<Scalars['String']>
  metaTitulo_not_contains?: InputMaybe<Scalars['String']>
  metaTitulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  proyectosCollection_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  titulo?: InputMaybe<Scalars['String']>
  tituloPrincipal?: InputMaybe<Scalars['String']>
  tituloPrincipal_contains?: InputMaybe<Scalars['String']>
  tituloPrincipal_exists?: InputMaybe<Scalars['Boolean']>
  tituloPrincipal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  tituloPrincipal_not?: InputMaybe<Scalars['String']>
  tituloPrincipal_not_contains?: InputMaybe<Scalars['String']>
  tituloPrincipal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_contains?: InputMaybe<Scalars['String']>
  titulo_exists?: InputMaybe<Scalars['Boolean']>
  titulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_not?: InputMaybe<Scalars['String']>
  titulo_not_contains?: InputMaybe<Scalars['String']>
  titulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface HomeInformacionProyectos {
  __typename?: 'HomeInformacionProyectos'
  json: Scalars['JSON']
  links: HomeInformacionProyectosLinks
}

export interface HomeInformacionProyectosAssets {
  __typename?: 'HomeInformacionProyectosAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export interface HomeInformacionProyectosEntries {
  __typename?: 'HomeInformacionProyectosEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export interface HomeInformacionProyectosLinks {
  __typename?: 'HomeInformacionProyectosLinks'
  assets: HomeInformacionProyectosAssets
  entries: HomeInformacionProyectosEntries
}

export interface HomeLinkingCollections {
  __typename?: 'HomeLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export interface HomeLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum HomeOrder {
  MetaTituloAsc = 'metaTitulo_ASC',
  MetaTituloDesc = 'metaTitulo_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TituloPrincipalAsc = 'tituloPrincipal_ASC',
  TituloPrincipalDesc = 'tituloPrincipal_DESC',
  TituloAsc = 'titulo_ASC',
  TituloDesc = 'titulo_DESC'
}

export interface HomeProyectosCollection {
  __typename?: 'HomeProyectosCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export interface ImageTransformOptions {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>
}

export interface Query {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  contenidosTransversales?: Maybe<ContenidosTransversales>
  contenidosTransversalesCollection?: Maybe<ContenidosTransversalesCollection>
  entryCollection?: Maybe<EntryCollection>
  home?: Maybe<Home>
  homeCollection?: Maybe<HomeCollection>
  seccionProyectos?: Maybe<SeccionProyectos>
  seccionProyectosCollection?: Maybe<SeccionProyectosCollection>
  seccionProyectosInternaDeProyectos?: Maybe<SeccionProyectosInternaDeProyectos>
  seccionProyectosInternaDeProyectosCollection?: Maybe<SeccionProyectosInternaDeProyectosCollection>
  transversal?: Maybe<Transversal>
  transversalCollection?: Maybe<TransversalCollection>
}

export interface QueryAssetArgs {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export interface QueryAssetCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetFilter>
}

export interface QueryContenidosTransversalesArgs {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export interface QueryContenidosTransversalesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<ContenidosTransversalesOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ContenidosTransversalesFilter>
}

export interface QueryEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EntryFilter>
}

export interface QueryHomeArgs {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export interface QueryHomeCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<HomeOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HomeFilter>
}

export interface QuerySeccionProyectosArgs {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export interface QuerySeccionProyectosCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<SeccionProyectosOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SeccionProyectosFilter>
}

export interface QuerySeccionProyectosInternaDeProyectosArgs {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export interface QuerySeccionProyectosInternaDeProyectosCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<SeccionProyectosInternaDeProyectosOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SeccionProyectosInternaDeProyectosFilter>
}

export interface QueryTransversalArgs {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export interface QueryTransversalCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<TransversalOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TransversalFilter>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export type SeccionProyectos = Entry & {
  __typename?: 'SeccionProyectos'
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<SeccionProyectosLinkingCollections>
  metaDescripcion?: Maybe<Scalars['String']>
  metaTitulo?: Maybe<Scalars['String']>
  proyectosCollection?: Maybe<SeccionProyectosProyectosCollection>
  slug?: Maybe<Scalars['String']>
  sys: Sys
  titulo?: Maybe<Scalars['String']>
  tituloPrincipal?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export interface SeccionProyectosLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export interface SeccionProyectosMetaDescripcionArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export interface SeccionProyectosMetaTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export interface SeccionProyectosProyectosCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export interface SeccionProyectosSlugArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export interface SeccionProyectosTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectos) */
export interface SeccionProyectosTituloPrincipalArgs {
  locale?: InputMaybe<Scalars['String']>
}

export interface SeccionProyectosCollection {
  __typename?: 'SeccionProyectosCollection'
  items: Array<Maybe<SeccionProyectos>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface SeccionProyectosFilter {
  AND?: InputMaybe<Array<InputMaybe<SeccionProyectosFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SeccionProyectosFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  metaDescripcion?: InputMaybe<Scalars['String']>
  metaDescripcion_contains?: InputMaybe<Scalars['String']>
  metaDescripcion_exists?: InputMaybe<Scalars['Boolean']>
  metaDescripcion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescripcion_not?: InputMaybe<Scalars['String']>
  metaDescripcion_not_contains?: InputMaybe<Scalars['String']>
  metaDescripcion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitulo?: InputMaybe<Scalars['String']>
  metaTitulo_contains?: InputMaybe<Scalars['String']>
  metaTitulo_exists?: InputMaybe<Scalars['Boolean']>
  metaTitulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitulo_not?: InputMaybe<Scalars['String']>
  metaTitulo_not_contains?: InputMaybe<Scalars['String']>
  metaTitulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  proyectosCollection_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
  titulo?: InputMaybe<Scalars['String']>
  tituloPrincipal?: InputMaybe<Scalars['String']>
  tituloPrincipal_contains?: InputMaybe<Scalars['String']>
  tituloPrincipal_exists?: InputMaybe<Scalars['Boolean']>
  tituloPrincipal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  tituloPrincipal_not?: InputMaybe<Scalars['String']>
  tituloPrincipal_not_contains?: InputMaybe<Scalars['String']>
  tituloPrincipal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_contains?: InputMaybe<Scalars['String']>
  titulo_exists?: InputMaybe<Scalars['Boolean']>
  titulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_not?: InputMaybe<Scalars['String']>
  titulo_not_contains?: InputMaybe<Scalars['String']>
  titulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export type SeccionProyectosInternaDeProyectos = Entry & {
  __typename?: 'SeccionProyectosInternaDeProyectos'
  contentfulMetadata: ContentfulMetadata
  descripcionDelProyecto?: Maybe<SeccionProyectosInternaDeProyectosDescripcionDelProyecto>
  imagenDelProyectoCollection?: Maybe<AssetCollection>
  linkedFrom?: Maybe<SeccionProyectosInternaDeProyectosLinkingCollections>
  metaDescripcion?: Maybe<Scalars['String']>
  metaTitulo?: Maybe<Scalars['String']>
  nombreDelProyecto?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  sys: Sys
  titulo?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosDescripcionDelProyectoArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosImagenDelProyectoCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosMetaDescripcionArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosMetaTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosNombreDelProyectoArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosSlugArgs {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/seccionProyectosInternaDeProyectos) */
export interface SeccionProyectosInternaDeProyectosTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

export interface SeccionProyectosInternaDeProyectosCollection {
  __typename?: 'SeccionProyectosInternaDeProyectosCollection'
  items: Array<Maybe<SeccionProyectosInternaDeProyectos>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface SeccionProyectosInternaDeProyectosDescripcionDelProyecto {
  __typename?: 'SeccionProyectosInternaDeProyectosDescripcionDelProyecto'
  json: Scalars['JSON']
  links: SeccionProyectosInternaDeProyectosDescripcionDelProyectoLinks
}

export interface SeccionProyectosInternaDeProyectosDescripcionDelProyectoAssets {
  __typename?: 'SeccionProyectosInternaDeProyectosDescripcionDelProyectoAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export interface SeccionProyectosInternaDeProyectosDescripcionDelProyectoEntries {
  __typename?: 'SeccionProyectosInternaDeProyectosDescripcionDelProyectoEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export interface SeccionProyectosInternaDeProyectosDescripcionDelProyectoLinks {
  __typename?: 'SeccionProyectosInternaDeProyectosDescripcionDelProyectoLinks'
  assets: SeccionProyectosInternaDeProyectosDescripcionDelProyectoAssets
  entries: SeccionProyectosInternaDeProyectosDescripcionDelProyectoEntries
}

export interface SeccionProyectosInternaDeProyectosFilter {
  AND?: InputMaybe<Array<InputMaybe<SeccionProyectosInternaDeProyectosFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SeccionProyectosInternaDeProyectosFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  descripcionDelProyecto_contains?: InputMaybe<Scalars['String']>
  descripcionDelProyecto_exists?: InputMaybe<Scalars['Boolean']>
  descripcionDelProyecto_not_contains?: InputMaybe<Scalars['String']>
  imagenDelProyectoCollection_exists?: InputMaybe<Scalars['Boolean']>
  metaDescripcion?: InputMaybe<Scalars['String']>
  metaDescripcion_contains?: InputMaybe<Scalars['String']>
  metaDescripcion_exists?: InputMaybe<Scalars['Boolean']>
  metaDescripcion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescripcion_not?: InputMaybe<Scalars['String']>
  metaDescripcion_not_contains?: InputMaybe<Scalars['String']>
  metaDescripcion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitulo?: InputMaybe<Scalars['String']>
  metaTitulo_contains?: InputMaybe<Scalars['String']>
  metaTitulo_exists?: InputMaybe<Scalars['Boolean']>
  metaTitulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitulo_not?: InputMaybe<Scalars['String']>
  metaTitulo_not_contains?: InputMaybe<Scalars['String']>
  metaTitulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  nombreDelProyecto?: InputMaybe<Scalars['String']>
  nombreDelProyecto_contains?: InputMaybe<Scalars['String']>
  nombreDelProyecto_exists?: InputMaybe<Scalars['Boolean']>
  nombreDelProyecto_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  nombreDelProyecto_not?: InputMaybe<Scalars['String']>
  nombreDelProyecto_not_contains?: InputMaybe<Scalars['String']>
  nombreDelProyecto_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
  titulo?: InputMaybe<Scalars['String']>
  titulo_contains?: InputMaybe<Scalars['String']>
  titulo_exists?: InputMaybe<Scalars['Boolean']>
  titulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_not?: InputMaybe<Scalars['String']>
  titulo_not_contains?: InputMaybe<Scalars['String']>
  titulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface SeccionProyectosInternaDeProyectosLinkingCollections {
  __typename?: 'SeccionProyectosInternaDeProyectosLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export interface SeccionProyectosInternaDeProyectosLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum SeccionProyectosInternaDeProyectosOrder {
  MetaTituloAsc = 'metaTitulo_ASC',
  MetaTituloDesc = 'metaTitulo_DESC',
  NombreDelProyectoAsc = 'nombreDelProyecto_ASC',
  NombreDelProyectoDesc = 'nombreDelProyecto_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TituloAsc = 'titulo_ASC',
  TituloDesc = 'titulo_DESC'
}

export interface SeccionProyectosLinkingCollections {
  __typename?: 'SeccionProyectosLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export interface SeccionProyectosLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum SeccionProyectosOrder {
  MetaTituloAsc = 'metaTitulo_ASC',
  MetaTituloDesc = 'metaTitulo_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TituloPrincipalAsc = 'tituloPrincipal_ASC',
  TituloPrincipalDesc = 'tituloPrincipal_DESC',
  TituloAsc = 'titulo_ASC',
  TituloDesc = 'titulo_DESC'
}

export interface SeccionProyectosProyectosCollection {
  __typename?: 'SeccionProyectosProyectosCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface Sys {
  __typename?: 'Sys'
  environmentId: Scalars['String']
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
  spaceId: Scalars['String']
}

export interface SysFilter {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  id?: InputMaybe<Scalars['String']>
  id_contains?: InputMaybe<Scalars['String']>
  id_exists?: InputMaybe<Scalars['Boolean']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_not?: InputMaybe<Scalars['String']>
  id_not_contains?: InputMaybe<Scalars['String']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedVersion?: InputMaybe<Scalars['Float']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']>
  publishedVersion_not?: InputMaybe<Scalars['Float']>
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/transversal) */
export type Transversal = Entry & {
  __typename?: 'Transversal'
  contactosCollection?: Maybe<TransversalContactosCollection>
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<TransversalLinkingCollections>
  logoPrincipalCollection?: Maybe<AssetCollection>
  redesSocialesCollection?: Maybe<TransversalRedesSocialesCollection>
  sys: Sys
  titulo?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/transversal) */
export interface TransversalContactosCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/transversal) */
export interface TransversalLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/transversal) */
export interface TransversalLogoPrincipalCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/transversal) */
export interface TransversalRedesSocialesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/0mwpcrhuv5bc/content_types/transversal) */
export interface TransversalTituloArgs {
  locale?: InputMaybe<Scalars['String']>
}

export interface TransversalCollection {
  __typename?: 'TransversalCollection'
  items: Array<Maybe<Transversal>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface TransversalContactosCollection {
  __typename?: 'TransversalContactosCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export interface TransversalFilter {
  AND?: InputMaybe<Array<InputMaybe<TransversalFilter>>>
  OR?: InputMaybe<Array<InputMaybe<TransversalFilter>>>
  contactosCollection_exists?: InputMaybe<Scalars['Boolean']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  logoPrincipalCollection_exists?: InputMaybe<Scalars['Boolean']>
  redesSocialesCollection_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  titulo?: InputMaybe<Scalars['String']>
  titulo_contains?: InputMaybe<Scalars['String']>
  titulo_exists?: InputMaybe<Scalars['Boolean']>
  titulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  titulo_not?: InputMaybe<Scalars['String']>
  titulo_not_contains?: InputMaybe<Scalars['String']>
  titulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface TransversalLinkingCollections {
  __typename?: 'TransversalLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export interface TransversalLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum TransversalOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TituloAsc = 'titulo_ASC',
  TituloDesc = 'titulo_DESC'
}

export interface TransversalRedesSocialesCollection {
  __typename?: 'TransversalRedesSocialesCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type GetAllProyectsQueryVariables = Exact<{ [key: string]: never }>

export interface GetAllProyectsQuery {
  __typename?: 'Query'
  home?: {
    __typename?: 'Home'
    informacionProyectos?: {
      __typename?: 'HomeInformacionProyectos'
      json: any
    } | null
    proyectosCollection?: {
      __typename?: 'HomeProyectosCollection'
      items: Array<
        | { __typename?: 'ContenidosTransversales' }
        | { __typename?: 'Home' }
        | { __typename?: 'SeccionProyectos' }
        | {
            __typename?: 'SeccionProyectosInternaDeProyectos'
            nombreDelProyecto?: string | null
            slug?: string | null
            imagenDelProyectoCollection?: {
              __typename?: 'AssetCollection'
              items: Array<{
                __typename?: 'Asset'
                url?: string | null
                title?: string | null
                description?: string | null
              } | null>
            } | null
            descripcionDelProyecto?: {
              __typename?: 'SeccionProyectosInternaDeProyectosDescripcionDelProyecto'
              json: any
            } | null
          }
        | { __typename?: 'Transversal' }
        | null
      >
    } | null
  } | null
}

export const GetAllProyectsDocument = gql`
  query GetAllProyects {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      informacionProyectos {
        json
      }
      proyectosCollection {
        items {
          ... on SeccionProyectosInternaDeProyectos {
            nombreDelProyecto
            slug
            imagenDelProyectoCollection {
              items {
                url
                title
                description
              }
            }
            descripcionDelProyecto {
              json
            }
          }
        }
      }
    }
  }
`

/**
 * __useGetAllProyectsQuery__
 *
 * To run a query within a React component, call `useGetAllProyectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProyectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProyectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProyectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProyectsQuery,
    GetAllProyectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllProyectsQuery, GetAllProyectsQueryVariables>(
    GetAllProyectsDocument,
    options
  )
}
export function useGetAllProyectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProyectsQuery,
    GetAllProyectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllProyectsQuery, GetAllProyectsQueryVariables>(
    GetAllProyectsDocument,
    options
  )
}
export type GetAllProyectsQueryHookResult = ReturnType<
  typeof useGetAllProyectsQuery
>
export type GetAllProyectsLazyQueryHookResult = ReturnType<
  typeof useGetAllProyectsLazyQuery
>
export type GetAllProyectsQueryResult = Apollo.QueryResult<
  GetAllProyectsQuery,
  GetAllProyectsQueryVariables
>
