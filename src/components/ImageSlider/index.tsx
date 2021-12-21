import React, { useRef, useState } from 'react';
import { ViewToken } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
  CarList
} from './styles';

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChange = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>
      <CarList
        onViewableItemsChanged={indexChange.current}
        data={imagesUrl}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage
              resizeMode="contain"
              source={{ uri: item }}
            />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
};