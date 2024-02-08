import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
	const arrayName = ["1999", "2000", "2001", "2002", "2003"];
	const [value, setValue] = React.useState(arrayName[0]);

	return (
		<>
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Изберете година" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						{arrayName.map((item, index) => (
							<SelectItem key={index} value={item}>
								{item}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
}
