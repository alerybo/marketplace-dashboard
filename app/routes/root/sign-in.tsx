import { redirect } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export async function clientLoader() {
  try {
    const user = await account.get();

    if (user.$id) return redirect("/");
  } catch (error) {
    console.log("Error in clientLoader:", error);
  }
}

const SignIn = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-auth bg-cover bg-no-repeat">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Sign in with Google to manage marketplace listings and user
                activity with ease.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button type="button" onClick={loginWithGoogle}>
                Login with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
