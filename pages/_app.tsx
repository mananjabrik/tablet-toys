import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</QueryClientProvider>
		</RecoilRoot>
	);
}
export default MyApp;
