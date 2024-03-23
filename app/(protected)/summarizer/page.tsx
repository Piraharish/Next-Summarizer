"use client";

import { fetchSummarizedData } from "@/actions/summarize";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArticleSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaDownload } from "react-icons/fa6";
import * as z from "zod";

const Summarizer = () => {
  const [article, setArticle] = useState<string | null>();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof ArticleSchema>>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      url: "",
      length: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof ArticleSchema>) => {
    setIsPending(true);
    setError(null);
    try {
      const data = await fetchSummarizedData(values.url, values.length);
      if (data.error) {
        setError(data.error);
      } else {
        setArticle(data.summary);
      }
    } catch (error) {
      console.error("Error fetching summarized data:", error);
      setError("Error fetching summarized data");
    } finally {
      setIsPending(false);
    }
  };

  const downloadArticle = () => {
    if (article) {
      const blob = new Blob([article], { type: "text/plain" });
      const anchor = document.createElement("a");
      anchor.href = URL.createObjectURL(blob);
      anchor.download = "summary.txt";
      anchor.click();
    }
  };

  return (
    <div className="h-page flex flex-col justify-center items-center mb-28">
      <Card className="p-8 max-w-xl w-full bg-muted/55 border-none">
        <h2 className="font-bold text-3xl text-center mb-6 grad">Summarizer</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-lg">URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="url"
                        placeholder="🔗 Enter an URL"
                        disabled={isPending}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Summary Length</FormLabel>
                    <Select required onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger
                          disabled={isPending}
                          className="w-[180px]"
                        >
                          <SelectValue placeholder="Select length" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {[1, 2, 3, 4, 5].map((value) => (
                            <SelectItem key={value} value={value.toString()}>
                              {value}
                            </SelectItem>
                          ))}
                          <SelectLabel className="text-xs font-normal text-muted-foreground">
                            (max 5)
                          </SelectLabel>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error as string} />
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-fit mx-auto text-base font-medium"
            >
              <LightningBoltIcon className="w-5 h-5 mr-1" />
              Summarize
            </Button>
          </form>
        </Form>
      </Card>
      {article && (
        <Card className="mt-12 p-0 sm:p-2 md:p-4 bg-primary/20 max-w-4xl border-none">
          <CardTitle className="text-center text-2xl font-semibold my-8">
            Article Summary
          </CardTitle>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <p className="text-base text-primary-foreground text-justify mb-6">
              {article}
            </p>
            <Button
              onClick={downloadArticle}
              className="flex gap-2 text-base items-center"
            >
              <FaDownload className="h-4 w-4" /> Download Summary
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Summarizer;
