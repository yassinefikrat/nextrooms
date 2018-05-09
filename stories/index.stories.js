import React from "react"

import Head from "next/head"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Welcome } from "@storybook/react/demo"

import Button from "material-ui/Button"
import TopBar from "../components/TopBar.js"
import SmallUsersList from "../components/SmallUsersList.js"
import RoomThumb from "../components/RoomThumb.js"
import NewRoom from "../components/NewRoom.js"

addDecorator(story => (
	<div style={{ textAlign: "left" }}>
		<style jsx global>{`
			@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");

			body {
				font-family: "Roboto", sans-serif;
			}
		`}</style>

		{story()}
	</div>
))

storiesOf("Welcome", module).add("to Storybook", () => (
	<Welcome showApp={linkTo("Button")} />
))

storiesOf("Button", module)
	.add("flat", () => (
		<Button onClick={action("clicked")}>Hello Button</Button>
	))
	.add("raised", () => (
		<Button onClick={action("clicked")} variant="raised">
			Hello Button
		</Button>
	))
	.add("flat primary", () => (
		<Button onClick={action("clicked")} color="primary">
			Hello Button
		</Button>
	))
	.add("raised primary", () => (
		<Button onClick={action("clicked")} variant="raised" color="primary">
			Hello Button
		</Button>
	))

storiesOf("Top Bar", module).add("default", () => <TopBar />)

storiesOf("Room Thumbnail", module)
	.add("default", () => (
		<RoomThumb
			key="room A"
			room={{
				name: "room A",
				currentUsers: ["user A", "user B"],
				settings: { game: "Fortnite", maxUsers: 4 }
			}}
		/>
	))
	.add("6 users", () => (
		<RoomThumb
			key="room A"
			room={{
				name: "room A",
				currentUsers: ["user A", "user B"],
				settings: { game: "Fortnite", maxUsers: 6 }
			}}
		/>
	))

storiesOf("Small Users List", module)
	.add("full", () => (
		<SmallUsersList
			maxUsers={4}
			users={["user A", "user B", "user C", "user D"]}
		/>
	))
	.add("half full", () => (
		<SmallUsersList maxUsers={4} users={["user A", "user B"]} />
	))
	.add("empty", () => <SmallUsersList maxUsers={4} users={[]} />)
	.add("only 2 spots", () => (
		<SmallUsersList maxUsers={2} users={["user A", "user B"]} />
	))

storiesOf("New Room Thumbnail", module).add("default", () => (
	<NewRoom
		games={["Fortnite"]}
		sizes={["2 players", "3 players", "4 players"]}
	/>
))
