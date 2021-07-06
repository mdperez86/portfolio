import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { useStyles } from './TextRotate.styles';

const getTypingTime = (text: string, typingSpeed: number): number => {
  const length = text.length;
  return length / typingSpeed;
};

const getTypingTimePerChar = (text: string, typingSpeed: number): number => {
  const length = text.length;
  return getTypingTime(text, typingSpeed) / length;
};

const getDeletingTime = (text: string, deletingSpeed: number): number => {
  const length = text.length;
  return length / deletingSpeed;
};

const getDeletingTimePerChar = (text: string, deletingSpeed: number): number => {
  const length = text.length;
  return getDeletingTime(text, deletingSpeed) / length;
};

enum Direction {
  RIGHT,
  LEFT,
};

export const TextRotate = (props: TextRotateProps) => {
  const { rotate, period, typingSpeed, deletingSpeed } = props;

  const classes = useStyles();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(Direction.RIGHT);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const length = rotate[currentIndex].length;
    const typingTimePerChar = getTypingTimePerChar(rotate[currentIndex], typingSpeed);
    const intervalId = setInterval(() => {
      if (direction === Direction.RIGHT)
        setPosition((position) => position < length ? position + 1 : position);
    }, typingTimePerChar);
    return () => {
      clearInterval(intervalId);
    };
  }, [rotate, currentIndex, direction, typingSpeed]);

  useEffect(() => {
    const deletingTimePerChar = getDeletingTimePerChar(rotate[currentIndex], deletingSpeed);
    const intervalId = setInterval(() => {
      if (direction === Direction.LEFT)
        setPosition((position) => position > 0 ? position - 1 : position);
    }, deletingTimePerChar);
    return () => {
      clearInterval(intervalId);
    };
  }, [rotate, currentIndex, direction, deletingSpeed]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (position === 0) {
        setDirection(Direction.RIGHT);
        setCurrentIndex((index) => index < rotate.length - 1 ? index + 1 : 0);
      }
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [rotate, position]);

  useEffect(() => {
    const length = rotate[currentIndex].length;
    const timeoutId = setTimeout(() => {
      if (position === length) 
        setDirection(Direction.LEFT);
    }, period);
    return () => clearTimeout(timeoutId);
  }, [rotate, period, currentIndex, position]);

  useEffect(() => {
    const text = rotate[currentIndex].substring(0, position);
    setCurrentText(text);
  }, [rotate, currentIndex, position]);

  return (
    <Box className={classes.root} py={2}>
      <Typography component="p" className={classes.font}>
        {'<'}<Typography className={classes.font} component="span" color="secondary">code</Typography>{'> '}
        {currentText}
        {'| </'}<Typography className={classes.font} component="span" color="secondary">code</Typography>{'>'}
      </Typography>
    </Box>
  );
};

TextRotate.defaultProps = {
  rotate: [''],
  period: 2000,
  typingSpeed: 20 / 1000,     // chars per second
  deletingSpeed: 50 / 1000,   // chars per second
}

type TextRotateProps = {
  rotate: string[];
  period?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
};
