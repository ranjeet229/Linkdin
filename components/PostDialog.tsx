import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ProfilePhoto from "./shared/ProfilePhoto";

export function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any;
  open: boolean;
  src: string;
}) {
  return (
    <Dialog open={open}>
        <DialogContent
          onInteractOutside={() => setOpen(false)}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle className="flex gap-2">
              <ProfilePhoto src={src} />
              <div>
                <h1>Ranjeet Kumar</h1>
                <p className="text-xs text-gray-500">Post to Anyone</p>
              </div>
            </DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form action="">
            <div className="flex flex-col">
                
            </div>
          </form>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      
    </Dialog>
  );
}
