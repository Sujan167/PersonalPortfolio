import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Switch>
				<Route path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
			<Toaster />
		</QueryClientProvider>
	);
}
