import { useMemo, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import getImgDataUrl from "-/utils/getImgDataUrl";
import {
  Container,
  ImageDisplay,
  ResetImageIcon,
  PostWrapper,
  PostContainer,
  PostImageDisplay
} from "./styles";

export interface BaseProps {
  onChange?: (file: string) => void;
  defaultValue?: string;
}

const PostImageDrop: React.FC<BaseProps> = ({
  onChange,
  defaultValue = "",
  ...props
}) => {
  const [imgUrl, setImgUrl] = useState("");
  React.useEffect(() => {
    if (defaultValue) {
      setImgUrl(defaultValue);
    }
  }, [defaultValue]);
  const onDrop = useCallback(acceptedFiles => {
    let data;
    (async () => {
      data = await getImgDataUrl(acceptedFiles[0]);
      setImgUrl(data);
      if (onChange) {
        onChange(data);
      }
    })();
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*"
  });
  const image = useMemo(() => {
    if (imgUrl && imgUrl !== "") {
      return imgUrl;
    }
    if (isDragActive) {
      return "/icons/download.svg";
    }
    return "/images/emptypost.png";
  }, [imgUrl, isDragActive]);
  const resetImage = () => {
    setImgUrl("");
    if (onChange) {
      onChange("");
    }
  };
  return (
    <PostWrapper>
      <PostContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <PostImageDisplay src={image} />
      </PostContainer>
      {imgUrl !== "" && <ResetImageIcon onClick={resetImage} />}
    </PostWrapper>
  );
};

export default PostImageDrop;
