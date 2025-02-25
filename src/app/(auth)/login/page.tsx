'use client'

import { useForm } from 'react-hook-form'
import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
	Box,
	useToast,
	Text,
	Flex,
} from '@chakra-ui/react'
import { signIn } from "next-auth/react"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RouteURL } from '@/consts/route';

const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
	const router = useRouter();
	const toast = useToast()

	const { 
		register, 
		handleSubmit, 
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});
	
	const onSubmit = async (data: FormData) => {
		try {
			const res = await signIn('credentials', {
				redirect: false,
				email: data.email,
				password: data.password,
			});
			if(!res?.error) {
				toast({
					title: "Login Success!",
					description: "You can now register to our competitions",
					status: 'success',
					duration: 7000,
					isClosable: true,
				});

				router.push(RouteURL.benmaxFinal)
			}
			else {
				if(res?.status === 401) {
					toast({
						title: "Login Error!",
						description: "Please check your email or password",
						status: 'error',
						duration: 7000,
						isClosable: true,
					})
				}
				else {
					toast({
						title: "Login Error!",
						description: "Please register first",
						status: 'error',
						duration: 7000,
						isClosable: true,
					})
				}
			}
		}
		catch (err) {
			toast({
				title: "Login Error!",
				description: "Please try again later",
				status: 'error',
				duration: 7000,
				isClosable: true,
			})
			console.error(err);
		}
	};

    return (
		<Box
			margin="auto"
			w={{
				base: '100%',
				md: '60%',
				lg: '75%',
				xl: '70%'
			}}
		>
			<Flex
				flexDirection='column'
				className="items-center"
                mb={16}
			>
				<Text
					fontSize="xl"
					fontWeight="bold"
				>
					Welcome Back!
				</Text>
				<Text>
					Please enter your details
				</Text>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl
					isInvalid={!!errors.email}
					my={3}
				>
					<FormLabel htmlFor='email'>Email</FormLabel>
					<Input
						py={6}
						id='email'
						placeholder='Email'
						{...register('email')}
					/>
					<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
				</FormControl>
				<FormControl
					isInvalid={!!errors.password}
					my={3}
				>
					<FormLabel htmlFor='password'>Password</FormLabel>
					<Input
						py={6}
						id='password'
						type='password'
						placeholder='Password'
						{...register('password')}
					/>
					<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
				</FormControl>
				<Text
					align="right"
				>
					<Link href='mailto:beacon.bme@gmail.com'>
						Forget password?
					</Link>
				</Text>
				<Button
					py={6}
					mt={4}
					colorScheme='primaryblue'
					isLoading={isSubmitting}
					type='submit'
					w="100%"
				>
					Sign In
				</Button>
				<Text 
					fontSize='md'
					align='center'
					mt={4}
				>
					Don&apos;t have an account?{" "}
					<Link
						href='/register'
						className="font-medium text-[#004AB5]"
					>
						Sign Up
					</Link>
				</Text>
			</form>
		</Box>
    )
}