import { useMemo, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useToggle } from "react-use";
import getImgDataUrl from "-/utils/getImgDataUrl";
import { Container, ImageDisplay, ResetImageIcon, Wrapper } from "./styles";

export interface BaseProps {
  onChange?: (file: string) => void;
  defaultValue?: string;
  handleDefault?: (isDefault: boolean) => void;
}

const BaseImageDrop: React.FC<BaseProps> = ({
  onChange,
  defaultValue = "",
  handleDefault,
  ...props
}) => {
  const [imgUrl, setImgUrl] = useState("");
  const [isDefault, toggle] = useToggle(true);
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
      toggle(false);
      if (onChange) {
        onChange(data);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (handleDefault) {
      handleDefault(isDefault);
    }
  }, [isDefault, handleDefault]);

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
    return "/icons/image.svg";
  }, [imgUrl, isDragActive]);
  const resetImage = () => {
    setImgUrl("");
    toggle(false);
    if (onChange) {
      onChange("");
    }
  };
  return (
    <Wrapper>
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        <ImageDisplay src={image} />
      </Container>
      {imgUrl !== "" && <ResetImageIcon onClick={resetImage} />}
    </Wrapper>
  );
};

export default BaseImageDrop;
