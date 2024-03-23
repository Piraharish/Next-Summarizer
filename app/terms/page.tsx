import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TermsAndConditions = () => {
  return (
    <div className="h-page max-w-3xl mx-auto">
      <Card className="border-none sm:p-4 h-fit">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-center mb-4">
            Terms and Conditions
          </CardTitle>
          <CardDescription className="text-base">
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold mb-2">
            Your use of this website is subject to the following terms:
          </p>
          <ol className="flex flex-col gap-2 mb-4 text-justify">
            <li className="ml-8 text-base text-muted-foreground">
              <span className="text-primary text-xl">&rarr;&nbsp;&nbsp;</span>
              This website uses cookies to monitor browsing preferences.
            </li>
            <li className="ml-8 text-base text-muted-foreground">
              <span className="text-primary text-xl">&rarr;&nbsp;&nbsp;</span>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness, or
              suitability of the information and materials found or offered on
              this website for any particular purpose.
            </li>
            <li className="ml-8 text-base text-muted-foreground">
              <span className="text-primary text-xl">&rarr;&nbsp;&nbsp;</span>
              You acknowledge that such information and materials may contain
              inaccuracies or errors, and we expressly exclude liability for any
              such inaccuracies or errors to the fullest extent permitted by
              law.
            </li>
            <li className="ml-8 text-base text-muted-foreground">
              <span className="text-primary text-xl">&rarr;&nbsp;&nbsp;</span>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services, or information available through this website meet your
              specific requirements.
            </li>
          </ol>
          <p className="px-8 text-sm text-muted-foreground">
            * These terms and conditions may change from time to time. Your
            continued use of the website following any changes indicates your
            acceptance of those changes. *
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;
