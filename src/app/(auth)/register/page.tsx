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
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link';
import { RouteURL } from '@/consts/route';

const schema = z.object({
	fullname: z.string().min(1, "Please enter your name"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
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
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
				method: 'POST',
				body: JSON.stringify({
					fullname: data.fullname,
					email: data.email,
					password: data.password,
				})
			})
	
			if(res.status === 200) {
				toast({
					title: "Register Success!",
					description: "Please check your email/spam to verify your account",
					status: 'success',
					duration: 7000,
					isClosable: true,
				})
			}
			else {
				toast({
					title: "Register Error!",
					description: "Please try again later",
					status: 'error',
					duration: 7000,
					isClosable: true,
				})
			}	
		} catch (error) {
			toast({
				title: "Register Error!",
				description: "Please try again later",
				status: 'error',
				duration: 7000,
				isClosable: true,
			})
		}
	}

    return (
		<Box
			margin="auto"
			w={{
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
					Make Your Account
				</Text>
				<Text>
					Grab your seat right now!
				</Text>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl
					isInvalid={!!errors.fullname}
					my={3}
				>
					<FormLabel htmlFor='fullname'>Full Name</FormLabel>
					<Input
						py={6}
						id='fullname'
						placeholder='Full Name'
						{...register('fullname')}
					/>
					<FormErrorMessage>{errors.fullname?.message}</FormErrorMessage>
				</FormControl>
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
				<Button
					py={6}
					mt={4}
					colorScheme='primaryblue'
					isLoading={isSubmitting}
					type='submit'
					w="100%"
				>
					Sign Up
				</Button>
				<Text
					fontSize='md'
					align='center'
					mt={4}
				>
					Already have an account?{" "}
					<Link
						href={RouteURL.login}
						className="font-medium text-[#004AB5]"
					>
						Sign In
					</Link>
				</Text>
			</form>
		</Box>
    )
}