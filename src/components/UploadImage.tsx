import { HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useCallback } from 'react';
import { ImageUploadSizeLimit } from '../lib/core.validations';
import type { UploadState } from '../lib/cloudinary';
import { ImageUploadIcon } from './ImageUploadIcon';

interface Props {
  onChange: (files: File[]) => void;
  uploadState: UploadState;
  uploadError: string;
  publicId: string;
  identifier: string;
  isProcessing: boolean;
}

export function UploadImage (props: Props) {
  const { onChange, uploadState, uploadError, publicId, identifier, isProcessing } = props;
  const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");
  const hoverBgColor = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onChange([event.target.files[0]!]);
    }
  }, [onChange]);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        id={`file${identifier}`}
        onChange={handleChange}
        style={{
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          top: 0,
          left: 0
        }}
        disabled={isProcessing}
      />
      <label htmlFor={`file${identifier}`}>
        <VStack
          p="4"
          border='1px'
          borderStyle="dashed"
          justify="center"
          cursor={"pointer"}
          align="flex-start"
          borderRadius={"md"}
          borderColor={borderColor}
          _hover={{ background: hoverBgColor }}
        >
          <HStack spacing="12px">
            <ImageUploadIcon
              status={uploadState}
              publicId={publicId}
              cursor={"pointer"}
              style={{ color: getIconColor(uploadState) }}
            />
            <div>
              <Text cursor={"pointer"} fontSize="sm">
                Upload {identifier}
              </Text>
              <Text cursor={"pointer"} fontSize="xs">
                Image should not exceed {ImageUploadSizeLimit.DisplayValue}
              </Text>
              {uploadError && (
                <Text fontSize="sm" color="red.600">
                  {uploadError}
                </Text>
              )}
            </div>
          </HStack>
        </VStack>
      </label>
    </>
  );
}

function getIconColor (status: UploadState) {
  const mapping: [string, string][] = [
    ["uploaded", "red"],
    ["uploading", "blue"],
    ["error", "red"],
  ];
  const match = mapping.find(el => el[0] === status);
  return match?.[1] || "grey";
}
