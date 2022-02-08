import React from "react";
import { useQuery } from '@apollo/client';
import RichContent from "@magento/venia-ui/lib/components/RichContent";
import {fullPageLoadingIndicator} from "@magento/venia-ui/lib/components/LoadingIndicator";
import ErrorView from "@magento/venia-ui/lib/components/ErrorView";
import {CMS_PAGE_GQL} from './cmsHomePage.gql';
const Comingsoon = () => {
    const { loading, error, data } = useQuery(CMS_PAGE_GQL, {
        variables: {
            identifier: "home-page"
        },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });
    if (!data) {
        if (loading) {
            return fullPageLoadingIndicator;
        }
        if (error) {
            return <ErrorView message={error.message} />;
        }
    }
    const cmsPage = data ? data.cmsPage : null;
    const cmsContent = cmsPage.content.length > 0 ? cmsPage.content : "";
    return (
        <RichContent html={cmsContent} />
    );
}
export default Comingsoon;