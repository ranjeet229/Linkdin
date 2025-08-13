import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Textarea } from "./ui/textarea";
import { Image as ImageIcon, X, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import { readFileAsDataUrl } from "@/lib/utils";

export function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any;
  open: boolean;
  src: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const fileChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (files) {
      const urls: string[] = [];
      for (const file of Array.from(files)) {
        const dataurl = await readFileAsDataUrl(file);
        urls.push(dataurl);
      }
      setSelectedFiles((prev) => [...prev, ...urls]); // Append new files
    }
  };

  const removeImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        {/* Close Button */}
        <DialogClose asChild>
          <button className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
            <X className="h-4 w-4" />
          </button>
        </DialogClose>

        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <ProfilePhoto src={src} />
            <div>
              <h1>Ranjeet Kumar</h1>
              <p className="text-xs text-gray-500">Post to Anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4">
          <Textarea
            id="name"
            name="inputText"
            className="border-none text-lg focus-visible:ring-0"
            placeholder="Type your message here."
          />

          {/* Image Preview Grid */}
          {selectedFiles.length > 0 && (
            <div className="grid grid-cols-2 gap-2 my-4">
              {selectedFiles.map((src, index) => (
                <div key={index} className="relative group">
                  <img
                    src={src}
                    alt={`preview-${index}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100"
                  >
                    <XCircle className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <DialogFooter className="flex items-center gap-4">
            <input
              ref={inputRef}
              onChange={fileChangeHandler}
              type="file"
              name="images"
              className="hidden"
              accept="image/*"
              multiple
            />
            <Button
              type="button"
              variant="ghost"
              onClick={() => inputRef?.current?.click()}
              className="flex items-center gap-1"
            >
              <ImageIcon className="text-blue-500 h-4 w-4" />
              Media
            </Button>
            <Button type="submit">Post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
