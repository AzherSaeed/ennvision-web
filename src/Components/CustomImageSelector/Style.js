import styled from "styled-components";

export const ImageSelectorContainer = styled.div`

margin: 10px 0;

    .image-upload-inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

        &-icon{
            border-left: 1px solid #C6C6C8;
            padding-left: 10px;
        }
    }

    .ant-upload.ant-upload-drag{
        background: none;
        border: 1px solid #C6C6C8;
        border-radius: 6px;
        margin-top: 5px;
    }

    .ant-upload.ant-upload-btn{
        padding: 10px 0;
    }

`