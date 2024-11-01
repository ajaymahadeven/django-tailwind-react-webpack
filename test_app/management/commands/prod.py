import os
import subprocess
from django.conf import settings
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = "Runs the Production scripts defined in package.json."

    def handle(self, *args, **kwargs):
        # Path to the static_src directory
        static_src_path = os.path.join(settings.BASE_DIR, 'test_app', 'static_src')
        try:
            # Run the npm script defined in package.json
            subprocess.check_call(['npm', 'run', 'prod'], cwd=static_src_path)
            self.stdout.write(self.style.SUCCESS('Successfully ran the development scripts.'))
        except subprocess.CalledProcessError as e:
            self.stdout.write(self.style.ERROR(f"An error occurred while running npm scripts: {e}"))
        except FileNotFoundError as fnf_error:
            self.stdout.write(self.style.ERROR(f"FileNotFoundError: {fnf_error}"))
