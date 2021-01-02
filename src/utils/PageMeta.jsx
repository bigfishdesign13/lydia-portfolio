import React from "react";
import { Helmet } from "react-helmet";

const PageMeta = ({ pageTitle }) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{ pageTitle }</title>
    </Helmet>
)

PageMeta.propTypes = {

}

export default PageMeta;