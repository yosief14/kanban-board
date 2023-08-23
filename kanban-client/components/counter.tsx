"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { motion, AnimatePresence } from "framer-motion"
import { FC } from "react";
interface CounterProps {
	isVisible: boolean;
}

export const Counter: FC<CounterProps> = ({ isVisible }) => {
	const [count, setCount] = useState(0);

	return (

	);
};
