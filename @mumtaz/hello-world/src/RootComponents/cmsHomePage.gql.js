import { gql } from '@apollo/client';
export const CMS_PAGE_GQL = gql`
    query getCMSPage($identifier: String!) {
        cmsPage(identifier: $identifier) {
            identifier
            url_key
            title
            content
            content_heading
            page_layout
            meta_title
            meta_description
            meta_keywords
        }
    }
`;