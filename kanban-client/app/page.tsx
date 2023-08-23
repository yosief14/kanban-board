'use client'
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useState } from "react";
import { Counter } from "@/components/counter";
import { Button } from "@nextui-org/button";
import {
	Listbox,
	ListboxSection,
	ListboxItem
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
	const [sideBarIsOpen, setSideBarIsOpen] = useState(true)
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div className="flex gap-3">

				<AnimatePresence initial={false}>
					{sideBarIsOpen && (
						<motion.div
							animate={{ scaleX: 1, opacity: 1 }}
							exit={{ scaleX: 0, opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Button radius="full" >
								Count
							</Button>
						</motion.div>
					)
					}
				</AnimatePresence>
				<motion.div
					animate={{x: sideBarIsOpen? 0: "-100%"}}
					transition={{duration: 0.6}}
				>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
				</motion.div>
			</div>
			<Listbox
				aria-label="Actions"
				onAction={(key) => {
					setSideBarIsOpen(!sideBarIsOpen)
					console.log(sideBarIsOpen)
				}}
			>
				<ListboxItem key="new">New file</ListboxItem>
				<ListboxItem key="copy">Copy link</ListboxItem>
				<ListboxItem key="edit">Edit file</ListboxItem>
				<ListboxItem key="delete" className="text-danger" color="danger">
					Delete file
				</ListboxItem>
			</Listbox>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
